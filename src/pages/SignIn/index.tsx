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
import jwtStorageService from '../../utils/jwt';

const SignIn = () => {
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

	const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const { data } = await instance.post('/auth/signin', {
				email,
				password,
			});

			if (data.access_token) {
				jwtStorageService.setToken(data.access_token);
				navigate('/todo');
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
		<FormWrapper title="Sign In">
			<form
				className="form"
				onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
					handleSignIn(event)
				}
			>
				<InputField
					type="text"
					name="email"
					value={email}
					label="이메일"
					onChange={onChange}
					data-testid="email-input"
					placeholder="pre-onboarding@wanted.co.kr"
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
						data-testid="signin-button"
						disabled={isDisabled}
					>
						로그인
					</Button>
				</ButtonWrapper>
			</form>
			<div className="text-wrapper text-center">
				<Link to={'/signup'}>회원가입 하러가기</Link>
			</div>
		</FormWrapper>
	);
};

export default SignIn;
