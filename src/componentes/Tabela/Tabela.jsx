import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";
import StatusBar from "./StatusBar";
import StatusLabel from "./StatusLabel";
import { withStyles } from "@material-ui/core/styles";
import Style from "./Tabela.module.scss";

const styles = (theme) => ({
  error: {
    backgroundColor: "red",
  },
  root: {
    color: "#263238",
  },
  ".MuiTableCell-root": {
    color: "#263238",
  },
});

const Tabela = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);

  const STATUS = {
    0: { color: "#16B108", label: "" },
    1: { color: "#EFAC00", label: "Aguardando equipe de manutenção" },
    2: { color: "#EFAC00", label: "Realizando manutenção..." },
    3: { color: "#EFAC00", label: "Aguardando equipe de limpeza" },
    4: { color: "#EFAC00", label: "Limpando..." },
    5: { color: "#ED1515", label: "Inacessível" },
    6: { color: "#ED1515", label: "Erro no dispositivo: Atualize a versão" },
  };

  function createData(id, status, versao, local, data) {
    return { id, status, versao, local, data };
  }

  const rows = [
    createData("CT0321", 6, 1.0, "CT/H/H-210", "31 Dez 2021 às 19:34 "),
    createData("CT0322", 1, 1.1, "CT/H/H-214", "20 Mar 2021 às 17:25 "),
    createData("CT0323", 0, 1.1, "CT/H/H-216", "13 Jan 2021 às 12:37 "),
    createData("CT0324", 3, 1.2, "CT/H/H-216", "09 Jun 2021 às 13:24 "),
    createData("CT0325", 5, 1.1, "CT/H/H-215", "07 Ago 2021 às 09:30"),
    createData("CT0321", 6, 1.0, "CT/H/H-210", "31 Dez 2021 às 19:34 "),
    createData("CT0322", 1, 1.1, "CT/H/H-214", "20 Mar 2021 às 17:25 "),
    createData("CT0323", 0, 1.1, "CT/H/H-216", "13 Jan 2021 às 12:37 "),
    createData("CT0324", 3, 1.2, "CT/H/H-216", "09 Jun 2021 às 13:24 "),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = withStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      borderBottom: "0",
    },
  }))(TableCell);

  const StyledTable = withStyles((theme) => ({
    root: {
      borderCollapse: "separate",
    },
  }))(Table);

  return (
    <>
      <TableContainer component={"div"}>
        <StyledTable
          className={Style.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell variant={"head"} style={{ color: "#263238" }}>
                ID/Status
              </TableCell>
              <TableCell style={{ color: "#263238" }} align="right">
                Versão
              </TableCell>
              <TableCell style={{ color: "#263238" }} align="right">
                Localização
              </TableCell>
              <TableCell style={{ color: "#263238" }} align="right">
                Data da instalação
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.name}>
                  <div className={Style.status}>
                    <div className={Style.statusBar}>
                      <StatusBar color={STATUS[row.status].color} />
                    </div>
                    <div className={Style.cell}>
                      <StyledTableCell style={{ color: "#263238" }}>
                        {row.id}
                        {STATUS[row.status].label.length > 1 && (
                          <StatusLabel
                            color={STATUS[row.status].color}
                            value={STATUS[row.status].label}
                          />
                        )}
                      </StyledTableCell>
                    </div>
                  </div>
                  <TableCell style={{ color: "#263238" }} align="right">
                    {row.versao}
                  </TableCell>
                  <TableCell style={{ color: "#263238" }} align="right">
                    {row.local}
                  </TableCell>
                  <TableCell style={{ color: "#263238" }} align="right">
                    {row.data}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <div className={Style.pagination}>
        <TablePagination
          style={{ color: "#263238" }}
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

Tabela.propTypes = {};

export default withStyles(styles)(Tabela);
