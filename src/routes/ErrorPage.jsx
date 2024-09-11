import { useRouteError } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
