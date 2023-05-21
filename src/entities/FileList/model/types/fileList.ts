export interface File {
    id: string;
    name: string;
    fileName: string;
    mimeType: string;
    url: string;
    createdAt: string;
}

export interface FileSchema {
    isLoading: boolean;
    error?: string;
    files?: File[];
}
