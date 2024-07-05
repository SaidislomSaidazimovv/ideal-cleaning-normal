import { Order } from "@modal";
import { Button } from "@mui/material";
import { OrderTable } from "@ui";
import { useEffect, useState } from "react";
import { order } from "@service";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await order.get();
      console.log(response);
      if (response.status === 200 && response?.data?.orders_list) {
        setData(response.data.orders_list);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Order open={open} handleClose={() => setOpen(false)} />
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add
          </Button>
        </div>

        <OrderTable data={data} />
      </div>
    </>
  );
};

export default Index;
