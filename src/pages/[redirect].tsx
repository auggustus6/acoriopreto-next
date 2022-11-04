export default function index({ teste }: any) {
  return <div>{teste}</div>;
}

export const getServerSideProps = async ({ req, params }: any) => {
  try {
    const { redirect } = params;

    const link = null;

    return {
      props: { link },
    };
  } catch (error) {
    console.error({ error });
  }
  return { props: {} };
};
