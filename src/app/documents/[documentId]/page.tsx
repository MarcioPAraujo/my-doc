import React from "react";
import Editor from "../../../components/Editor/editor";
import ToolBar from "@/components/toolbar/ToolBar/ToolBar";

interface IDocumentIdPage {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({ params }: IDocumentIdPage) => {
  const { documentId } = await params;
  return (
    <div>
      <ToolBar />
      <Editor />
    </div>
  );
};

export default DocumentPage;
