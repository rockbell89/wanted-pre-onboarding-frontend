import React from 'react';
import InputField from '../../components/UI/Form/InputField';
import Button from '../../components/UI/Button/Button';
import FormWrapper from '../../components/UI/Form/FormWrapper';
import ButtonWrapper from '../../components/UI/Button/ButtonWrapper';

const SignIn = () => {
	const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div>
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
						label="이메일"
						placeholder="pre-onboarding@wanted.co.kr"
					/>
					<InputField type="password" name="password" label="비밀번호" />
					<ButtonWrapper>
						<Button type="button">로그인</Button>
					</ButtonWrapper>
				</form>
			</FormWrapper>
		</div>
	);
};

export default SignIn;
