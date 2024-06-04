import React from "react";
import { useCountries } from "use-react-countries";
import { useNavigate } from "react-router-dom"; 
import qr1 from "../assets/img/qr1.jpg"
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function PaymentPage() {
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [email, setEmail] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [holderName, setHolderName] = React.useState("");

  const navigate = useNavigate();

  const handlePayNow = (e) => {
    e.preventDefault();
    alert(`Thank you for booking, ${email}. A mail will be sent.`);
    navigate("/destination"); // Redirect to destination page
  };

  const handlePayWithQR = (e) => {
    e.preventDefault();
    alert(`Thank you for booking, ${email}. A mail will be sent.`);
    navigate("/destination"); // Redirect to destination page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-lg">
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center px-4 py-2 text-center"
        >
          <div className="mb-4 h-20 p-6 text-white">
            {type === "card" ? (
              <CreditCardIcon className="h-10 w-10 text-white" />
            ) : (
              <img
                alt="QR Code"
                className="w-14"
                src="https://via.placeholder.com/100x100.png?text=QR+Code"
              />
            )}
          </div>
          <Typography variant="h5" color="white">
            Complete Your Payment
          </Typography>
        </CardHeader>
        <CardBody>
          <Tabs value={type} className="overflow-visible" >
            <TabsHeader className="relative">
              <Tab value="card" onClick={() => setType("card")}>
                Pay with Card
              </Tab>
              <Tab value="qr" onClick={() => setType("qr")}>
                Pay with QR
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form className="mt-12 max-w-sm mx-auto flex flex-col gap-4" onSubmit={handlePayNow}>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Your Email
                    </Typography>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="my-3">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Card Details
                    </Typography>

                    <Input
                      maxLength={19}
                      value={formatCardNumber(cardNumber)}
                      onChange={(event) => setCardNumber(event.target.value)}
                      placeholder="0000 0000 0000 0000"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <div className="my-4 flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          Expires
                        </Typography>
                        <Input
                          maxLength={5}
                          value={formatExpires(cardExpires)}
                          onChange={(event) =>
                            setCardExpires(event.target.value)
                          }
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="00/00"
                          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="mb-2 font-medium"
                        >
                          CVC
                        </Typography>
                        <Input
                          maxLength={4}
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          containerProps={{ className: "min-w-[72px]" }}
                          placeholder="000"
                          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      </div>
                    </div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Holder Name
                    </Typography>
                    <Input
                      value={holderName}
                      onChange={(e) => setHolderName(e.target.value)}
                      placeholder="Card Holder Name"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <Button type="submit" size="lg" className="py-4">Pay Now</Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
              <TabPanel value="qr" className="p-0">
                <div className="mt-12 flex flex-col items-center gap-4">
                  <img
                    src="test\src\assets\img\qr1.jpg"
                    alt="QR Code"
                  />
                  <Button size="lg" className="py-4 px-8" onClick={handlePayWithQR}>Pay with QR</Button>
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-center gap-2 font-medium opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
