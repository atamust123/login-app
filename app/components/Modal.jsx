export const Modal = ({ open, title, body, footer }) => {
  const button = (
    <button className="flex p-4 h-12 flex-col items-center"></button>
  );

  return (
    <dialog
      open={open}
      className="flex-col items-center gap-2 rounded-xl bg-[#f2f2f7]"
    >
      <div className="text-black text-center font-galano font-medium text-lg tracking-widest mt-4 mx-3 mb-2 px-4">
        {title}
      </div>
      <div className="text-[#3C3C43] opacity-60 text-center font-galano text-xs tracking-wider font-medium mb-4 mx-3 px-4">
        {body}
      </div>
      <div>{footer}</div>
    </dialog>
  );
};
