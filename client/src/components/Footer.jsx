export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <span>© {year} Dinesh Kumar S. All rights reserved.</span>
        <span>Built with the MERN stack.</span>
      </div>
    </footer>
  );
}
