type TagPropsType = {
  text: string,
  active?: Boolean
};

const Tag = ({ text, active }: TagPropsType) => {
  return (
    <span
      className={`inline-flex items-center rounded-full text-[#2b3375] ${active ? "bg-[#d1f2ff]" : "bg-gray-50 ring-gray-600/50"} px-4 py-2 text-base font-medium ring-1 ring-inset cursor-pointer`}
    >
      {text}
    </span>
  );
};

export default Tag;