export default function Loader() {
  return (
    <div>
      <style jsx>{`
        div {
          width: 25px;
          height: 25px;
          border-radius: 99px;
          border: 1px solid #999;
          border-top-color: transparent;
          animation: spin 0.3s linear infinite;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
