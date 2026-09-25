import Link from "next/link";

const DetailButton = ({ id }) => {
  return (
    <Link
      href={`/exercise/${id}`}
      className="text-xs font-black uppercase tracking-wider text-[#c8ff00] transition group-hover:translate-x-1"
    >
      Details →
    </Link>
  );
};

export default DetailButton;