import {Button } from '@mui/material'


export const Pagination = ({nPages, currentPage, setCurrentPage}) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
   
  

  const nextPage = () => {
    if(currentPage !== nPages){
      setCurrentPage(currentPage + 1)
    }
  }
  const prevPage = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <Grid container alignItems='center' width='100%' justifyContent='space-around' >
    <ul>
    <li>
    <Button variant="outlined" disabled={isLoading}  onClick={prevPage}>{pgNumber}</Button> 
    </li>

    {
        pageNumbers.map(pgNumber=> (
           <li key={pgNumber} className={`${currentPage == pgNumber}` ? 'active' : ''}>
           <Button variant="outlined" disabled={isLoading}  onClick={setCurrentPage(pgNumber)}>{pgNumber}</Button> 
           </li>

        ))
    }

    <li>
    <Button variant="outlined" disabled={isLoading}  onClick={nextPage}>{pgNumber}</Button> 
    </li>
    
   </ul>
    </Grid>
  )
}
