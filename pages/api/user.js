const handler = ({ req, res, query }) => {
  res.status(200).json({ id: query.id, name: "John Doe" });
  return 1;
};
handler.getInitialProps = (props) => props;

export default handler;