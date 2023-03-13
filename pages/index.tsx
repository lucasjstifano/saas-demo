import Link from "next/link";
import { supabase } from "../utils/supabase";
import { useUser } from "../context/user";

const Home = ({ lessons }) => {
  const { user } = useUser();

  console.log({ user });

  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`}>
          <div className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {lesson.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");

  return {
    props: {
      lessons,
    },
  };
};
