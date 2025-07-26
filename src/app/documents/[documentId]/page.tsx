import React from "react";
import Editor from "../../../components/Editor/editor";

interface IDocumentIdPage {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({ params }: IDocumentIdPage) => {
  const { documentId } = await params;
  return (
    <div>
      <Editor />
    </div>
  );
};

export default DocumentPage;
