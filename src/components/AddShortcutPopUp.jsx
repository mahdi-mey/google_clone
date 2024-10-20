"use client";

export default function AddShortcutPopUp() {
  function addShortcut() {}
  function closeModal() {
    console.log("clicked me");
  }
  return (
    <div
      className="absolute inset-0 bg-black/15 flex justify-center items-center"
      onClick={closeModal}
    >
      <form
        className="h-72 bg-white h-76 w-full max-w-[512px] mx-auto rounded-md flex flex-col justify-evenly px-3"
        onClick={(e) => e.stopPropagation()}
        onSubmit={addShortcut}
      >
        <h2>Add Shortcut</h2>
        <label className="font-bold text-sm text-gray-600" htmlFor="">Name</label>
        <input className="bg-gray-200/70 focus:border-blue-600 outline-none ps-2 rounded-t-md h-9 border-b-2 border-gray-500" type="text" name="" id="" />
        <label className="font-bold text-sm text-gray-600" htmlFor="">Url</label>
        <input className="bg-gray-200/70 focus:border-blue-600 outline-none ps-2 rounded-t-md h-9 border-b-2 border-gray-500" type="text" name="" id="" />

        <div className="flex justify-end items-center">
          <button className="py-1.5 px-2.5 rounded-full border-1 border-blue-500 text-blue-500" onClick={closeModal}>Cancel</button>
          <button className="py-1.5 px-2.5 rounded-full ">Done</button>
        </div>
      </form>
    </div>
  );
}
