import Post, { PostType } from '@components/Post';

type NewsType = {
  posts: Array<PostType>;
  limit: number;
};

const News = (props: NewsType) => {
  const { posts, limit } = props;
  const list: Array<PostType> = posts.length <= limit ? posts : posts.slice(0, limit);

  return (
    list && (
      <div className="flex justify-between items-center flex-wrap gap-10">
        {list.map((_l, _i) => (
          <div key={_i} className="flex-1">
            <Post image={_l.image} title={_l.title} summary={_l.summary} datePublic={_l.datePublic} />
          </div>
        ))}
      </div>
    )
  );
};

export default News;
