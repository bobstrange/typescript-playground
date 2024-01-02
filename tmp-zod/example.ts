import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email(),
});

const userData = {
  name: "Taro",
  age: 30,
  email: "taro@example.com",
};

const invalidUserData = {
  name: "Taro",
  age: 30,
  email: "@example.com",
};

try {
  UserSchema.parse(userData);
  console.log("Validation succeeds:", userData);
} catch (error) {
  console.error("Validation fails:", error);
}

try {
  UserSchema.parse(invalidUserData);
  console.log("Validation succeeds:", invalidUserData);
} catch (error) {
  console.error("Validation fails:", error);
}
