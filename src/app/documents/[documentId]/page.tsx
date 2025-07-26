import React from "react";

interface IDocumentIdPage {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({ params }: IDocumentIdPage) => {
  const { documentId } = await params;
  return <div>DocumentPage: {documentId}</div>;
};

export default DocumentPage;
