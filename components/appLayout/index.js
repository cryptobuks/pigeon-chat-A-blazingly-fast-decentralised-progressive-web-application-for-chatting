import SnackbarsContainer from "react-lite-snackbar";
import { useFeedback } from "../../context/Feedback";

const AppLayout = ({ children }) => {
  const { snackbarConfig } = useFeedback();

  return (
    <>
      {/* Bring navigation here.. */}
      {children}
      <SnackbarsContainer instances={snackbarConfig} />
    </>
  );
};

export default AppLayout;
