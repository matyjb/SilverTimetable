import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import * as React from "react";

// TODO: Mozliwosc odswiezenia / automatycze odswiezanie jesli uzyska polaczenie

const ErrorPage = () => (
    <div className="ErrorPage">
      <Paper elevation={4}>
        <Typography type="headline" component="h3">
          Brak połączenia z Internetem
        </Typography>
        <Typography>
          Nie udało się pobrać aktualnej wersji planu.
          Żadna wersja nie znajduje się w pamięci urządzenia.
        </Typography>
      </Paper>
    </div>
);

export default ErrorPage;
