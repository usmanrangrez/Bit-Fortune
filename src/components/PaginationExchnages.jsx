import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";

const PaginationExchanges = ({
  exchangesPerPage,
  totalExchanges,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalExchanges / exchangesPerPage); i++) {
    pageNumbers.push(i);
  }

  //Change Page
  const paginate = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  //Previous Page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next Page
  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box p="2" bg="gray.100" borderRadius="md">
      <Breadcrumb separator="-" separatorColor="blue.600">
        {" "}
        {/* Set the separator color */}
        <BreadcrumbItem className="page-item">
          <BreadcrumbLink
            onClick={goToPreviousPage}
            className="page-link"
            disabled={currentPage === 1}
            color="blue.600"
          >
            Previous
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pageNumbers.map((number) => (
          <BreadcrumbItem key={number} className="page-item">
            <BreadcrumbLink
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? "active" : ""}`}
              color="blue.600"
            >
              {number}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem className="page-item">
          <BreadcrumbLink
            onClick={goToNextPage}
            className="page-link"
            disabled={currentPage === pageNumbers.length}
            color="blue.600"
          >
            Next
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default PaginationExchanges;
