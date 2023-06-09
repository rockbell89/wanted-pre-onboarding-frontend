export interface TodoData {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
}

export interface TodoCreateData {
	todo: string;
}

export interface TodoUpdateData {
	todo: string;
	isCompleted?: boolean;
}
