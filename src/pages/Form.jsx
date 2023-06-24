import { useForm } from "@mantine/form";
import React, { useState as state, useEffect, useState } from "react";
// import { add, addToCart } from "../redux/formData";
import {
  Button,
  TextInput,
  NumberInput,
  NativeSelect,
  FileButton,
  Group,
  Text,
} from "@mantine/core";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/dataInfo";
import ImagePreview from "../components/ImagePreview";
import { toast } from "react-hot-toast";
import { render } from "react-dom";
// import { addToCart } from "../redux/authSlice";
// import { addTo } from "../redux/formData";
// import { addToCart } from "../redux/authSlice";

// class ImagePreview extends React.Component {
//   preview = (e) => {
//     const input = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result;
//       const img = document.getElementById("img");
//       img.src = result;
//     };
//     reader.readAsDataURL(input);
//   };

// }
var currentDate = new Date();
const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // if (!selectedFile) {
  //   return console.log(selectedFile); // If no file is selected, don't render anything
  // }

  const reader = new FileReader();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  var day = currentDate.getDate();

  // Format the date as desired (e.g., YYYY-MM-DD)
  var formattedDate =
    year +
    "/" +
    month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0");

  const form = useForm({
    initialValues: {
      Name: "",
      Age: "",
      Gender: "Male",

      Phone: "",
      Address: "",
      file: null,
      date: formattedDate,
    },

    validate: {
      Name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      Age: (value) => (value.length <= 1 ? "You must need to add age" : null),

      Phone: (value) =>
        value.length <= 9 ? "Phone number must have at least 9 letters" : null,
      Address: (value) =>
        value.length < 2 ? "Address must have at least 2 letters" : null,
      // file: (value) => validateFile(value),
    },
  });

  // function validateFile(value) {
  //   if (value === null) {
  //     showAlert("File cannot be null");
  //     return 'File cannot be null';
  //   }
  //   return null;
  // }

  // function showAlert(message) {
  //   alert(message);
  // }

  // console.log(selectedFile);

  const handleFileChange = (e) => {
    const file = e;
    setSelectedFile(file);
    // const result = reader.result;
    // form.values.file = result

    // reader.readAsDataURL(selectedFile);

    // form.values.file(file)
  };

  useEffect(() => {
    if (selectedFile) {
      const handleImageLoad = (event) => {
        const result = reader.result;
        form.values.file = result;
      };

      // reader.onload = handleImageLoad;
      // reader.onloadstart = handleImageLoad
      reader.onloadend = handleImageLoad;
      // render.onload = handleImageLoad
      reader.readAsDataURL(selectedFile);
    }
  }, [handleFileChange]);
  // useEffect(() => {
  //   form.values.file
  // }, [selectedFile]);
  // Get the current date components

  // Output the formatted date

  // console.log(form.values);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [abs, setAbc] = state();

  return (
    <div className=" px-10 pt-5 pb-32 w-full bg-primaryLight  overflow-x-hidden">
      <div className="  flex w-[100%] justify-center  mt-20">
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            // dispatch(addTo(values));
            dispatch(addToCart(values));

            nav("/dataTable");
          })}
          className=" lg:w-[80%] md:w-[80%] w-[100%]  p-7 flex flex-col gap-5 shadow-lg "
        >
          <h2 className=" text-2xl text-gray-600 font-semibold">Create</h2>

          {/* <input
          
            type="file"
            // {...form.getInputProps("file")}
            onChange={handleFileChange}
            name=""
            id=""
          /> */}
          <Group position="start">
            <FileButton onChange={handleFileChange}>
              {(props) => (
                <Button variant="outline" color="" {...props}>
                  Upload image
                </Button>
              )}
            </FileButton>
          </Group>

          {/* {selectedFile && (
            <Text size="sm" align="center" mt="sm">
              Picked file: {selectedFile.name}
            </Text>
          )} */}

          <ImagePreview selectedFile={selectedFile} />
          <h1>UserInfo</h1>
          <div className=" grid grid-cols-2 gap-5">
            <TextInput
              label="Name"
              placeholder="Exp Roni.."
              {...form.getInputProps("Name")}
            />
            <NumberInput
              defaultValue={18}
              placeholder="age"
              label="Age"
              min={1}
              {...form.getInputProps("Age")}
            />
            <NativeSelect
              data={["Male", "Female"]}
              label="Gender"
              {...form.getInputProps("Gender")}
            />
          </div>

          <div className=" grid grid-cols-2 gap-5">
            <TextInput
              label="Phone"
              placeholder="09"
              {...form.getInputProps("Phone")}
            />
            <TextInput
              label="Address"
              placeholder="Enter Address"
              {...form.getInputProps("Address")}
            />
          </div>
          <div className="  grid grid-cols-2 gap-3">
            <Button
              disabled={form.values.file === null && true}
              className=" bg-blue-500 text-white col-span-2  rounded-sm"
              type="submit"
            >
              {form.values.file === null ? "Need Upload Image" : "Create"}
              {/* Create */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
