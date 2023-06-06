import { ReactNode } from 'react';

export interface BaseComponentProps {
	children?: ReactNode;
	className?: string;
	[restProps: string]: any;
}
