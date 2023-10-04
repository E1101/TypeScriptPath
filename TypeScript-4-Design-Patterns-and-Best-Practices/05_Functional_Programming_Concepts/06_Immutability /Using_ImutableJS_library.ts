import { List } from "immutable";

interface ImmutableBlogPost {
  title: string;
  tags: List<string>;
}

const anotherPost: ImmutableBlogPost = {
  title: "Welcome to Typescript",
  tags: List(["typescript", "learning"]),
};

// we disabled the type check of the tag's type.
(anotherPost.tags as any).push("demo");
// However, because at runtime it is backed by a truly immutable data structure,
// the contents of this list are not modified:
console.log(anotherPost.tags.toArray()); // [ 'typescript', 'learning' ]
