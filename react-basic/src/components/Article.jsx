import { useState } from "react";
import {Title, Content, PublishButton} from "./index";

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  // 更新関数はそのまま props として渡さず関数化する
  const puslishArticle = () => {
    setIsPublished(true)
  }
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      {/* 関数を props に渡すときは注意する */}
      <PublishButton isPublished={isPublished} onClick={puslishArticle} />
    </div>
  );
};

export default Article;