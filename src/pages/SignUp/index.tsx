import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/UI/Form/InputField';
import Button from '../../components/UI/Button/Button';
import FormWrapper from '../../components/UI/Form/FormWrapper';
import ButtonWrapper from '../../components/UI/Button/ButtonWrapper';
import useInputs from '../../hooks/useInputs';
import { signData } from '../../types';
import { validateEmail, validatePassword } from '../../utils/validate';
import instance from '../../utils/api';

const SignUp = () => {
	const navigate = useNavigate();
	const [isDisabled, setIsDisabled] = useState(true);

	const {
		formData: { email, password },
		onChange,
		onReset,
	} = useInputs<signData>({
		email: '',
		password: '',
	});

	const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await instance.post('/auth/signup', {
				email,
				password,
			});
			if (response.status === 201) {
				navigate('/signin');
			}
		} catch (error) {
			console.error(error);
		}

		onReset();
	};

	useEffect(() => {
		if (validateEmail(email) && validatePassword(password)) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email, password]);

	return (
		<FormWrapper title="Sign Up">
			<form
				className="form"
				onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
					handleSignUp(event)
				}
			>
				<InputField
					type="text"
					name="email"
					value={email}
					label="이메일"
					placeholder="pre-onboarding@wanted.co.kr"
					data-testid="email-input"
					onChange={onChange}
				/>
				<InputField
					type="password"
					name="password"
					value={password}
					label="비밀번호"
					data-testid="password-input"
					onChange={onChange}
				/>
				<ButtonWrapper>
					<Button
						type="submit"
						data-testid="signup-button"
						disabled={isDisabled}
					>
						회원가입
					</Button>
				</ButtonWrapper>
				<div className="text-wrapper text-center">
					<Link to={'/signin'}>로그인 하러가기</Link>
				</div>
			</form>
		</FormWrapper>
	);
};

export default SignUp;
