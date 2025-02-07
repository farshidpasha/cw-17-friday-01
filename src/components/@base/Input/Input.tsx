export default function Input() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor=""></label>
      <input
        type="text"
        className="outline-none shadow-sm focus:shadow-xl p-2 border border-gray-200 focus:border-gray-500 rounded-md"
      />
    </div>
  );
}
