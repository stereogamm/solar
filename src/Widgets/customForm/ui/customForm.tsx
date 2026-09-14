import { Button, Group, TextInput, Paper, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import styles from "../css/customForm.module.css";

type TCustomForm = {
  tableVisibility: () => void;
};

type TUserData = {
  lat: string;
  lon: string;
};

export const CustomForm = ({ tableVisibility }: TCustomForm) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      lat: "",
      lon: "",
    },

    validate: {
      lat: (value) =>
        /^-?(?:90(?:\.0+)?|(?:[0-8]?\d)(?:\.\d+)?)$/.test(value)
          ? null
          : "Invalid latitude",
      lon: (value) =>
        /^-?(?:180(?:\.0+)?|(?:1[0-7]\d|[1-9]?\d)(?:\.\d+)?)$/.test(value)
          ? null
          : "Invalid longitude",
    },
  });

  const dataHandler = (values: TUserData) => {
    console.log(values);
    tableVisibility();
    form.reset()
  };

  return (
    <Paper shadow="md" radius="md">
      <div className={styles.wrapper}>
        <form
          className={styles.form}
          onSubmit={form.onSubmit((values) => dataHandler(values))}
        >
          <Text
            variant="gradient"
            gradient={{ from: "#747474", to: "#ffffff", deg: 145 }}
            mb="lg"
            fz="h3"
            fw={400}
            className={styles.title}
          >
            Dark observing time
          </Text>
          <TextInput
            withAsterisk
            label="latitude"
            placeholder="from -90 to 90"
            key={form.key("lat")}
            {...form.getInputProps("lat")}
          />
          <TextInput
            withAsterisk
            label="longitude"
            placeholder="from -180 to 180"
            key={form.key("lon")}
            {...form.getInputProps("lon")}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Explore</Button>
          </Group>
        </form>
      </div>
    </Paper>
  );
};
