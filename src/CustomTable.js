
const Table = ({csvData}) => {

   return (
      <table border={1}>
        {
          csvData.map(data => (
            <tr>
              { data.map(item => 
                <td align="center">
                  {item}
                </td>)
              }
            </tr>
          ))
        }
      </table>
   )
  ;
};



export default Table;