import Link from "next/link";
import React from "react";
import style from "./page.module.css";

function page() {
  return (
    <div>
      <p className={style.paragraph}>
        Click&nbsp;
        <Link href="/documents/009">here</Link>
        &nbsp; to go to the document
      </p>
    </div>
  );
}

export default page;
