import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { useRegisterMutation } from "../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const token = uuidv4();

function SignUp(props) {

  const notify =() => toast.success('Register successfuly!', {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    const notifyError =() => toast.error('Register Fail!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    const nav = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const [register,{isLoading}] = useRegisterMutation();

  useEffect(() => {
    Cookies.remove('token');
  },[])

  return (
    <div className=" w-full">

      <div className=" w-full">
      <img src={"/bg-reg.svg"} className=" w-full h-screen absolute top-0 left-0 -z-30" alt="" />
      </div>
      
      <Paper
        className=" w-[300px] md:w-[400px] lg:w-[550px] bg-slate-50 shadow-none border-none mx-auto my-5"
        radius="md"
        p="xl"
        withBorder
        {...props}
      >
        <Text size="lg" weight={500} className=" text-2xl text-sky-400 font-bold">
          Register Your Account
        </Text>

        {/* <Group grow mb="md" mt="md">
  <GoogleButton radius="xl">Google</GoogleButton>
  <TwitterButton radius="xl">Twitter</TwitterButton>
</Group> */}

        {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

        <form
          onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            try {
              // const user = { name, email, password, password_confirmation };
              const { data } = await register(values);
              console.log(data);

              if (data?.success) {
                notify();
                nav(`/signin`);
              }else{
                notifyError()
              }

            } catch (error) {
              console.log(error);
            }
          })}
        >
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm password"
              value={form.values.password_confirmation}
              onChange={(event) =>
                form.setFieldValue(
                  "password_confirmation",
                  event.currentTarget.value
                )
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            {/* <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            /> */}
          </Stack>

          <Group position="apart" mt="xl">
            <Link to={"/signin"}>
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                size="xs"
              >
                Already have an account? <span className=" text-blue-500">Login</span>
              </Anchor>
            </Link>
            <button
              disabled={isLoading}
              className=" text-white p-2 bg-blue-500 px-3 py-2 rounded flex justify-center"
              type="submit"
              radius="xl"
            >
              {isLoading && <img src={"/Infinity-1s-200px.svg"} className=" w-10 h-5" />} Register
            </button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}

export default SignUp;
