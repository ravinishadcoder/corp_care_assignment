import { Box, Button, Center, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/reminder.module.css"
import figmaIcon from "../assesst/fingma.svg";
const Reminder = () => {
  return (
    <Box className={styles.reminderMainBox}>
      <Stack className={styles.reminderFont}>
        <Text mt="15px" >Agency Design Kit</Text>
      </Stack>
      <Stack alignItems="center" mt="10px">
        <Stack
          className={styles.reminderImg}
        >
          <img src={figmaIcon} alt="" width="38px" />
        </Stack>
      </Stack>
      <Stack className={styles.reminderFont}>
        <Text mt="10px">Will be published</Text>
        <Text>Nov 25, 2022</Text>
      </Stack>
      <Stack mt="10px">
        <Button className={styles.reminderButton} borderRadius="10px">
          Set as Reminder
        </Button>
      </Stack>
    </Box>
  );
};

export default Reminder;
