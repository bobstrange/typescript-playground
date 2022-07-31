import { Box, Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export const TopBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const ColorModeIcon = colorMode === "light" ? SunIcon : MoonIcon

  return (
    <Box width="100%" padding="1" backgroundColor="whatsapp.500">
      <Box maxWidth="container.xl" margin="auto">
        <Button
          aria-label="UI Theme"
          leftIcon={<ColorModeIcon />}
          onClick={toggleColorMode}
          size="xs"
          marginRight="2"
          borderRadius="sm"
        >
          Toggle theme
        </Button>
      </Box>
    </Box>
  )
}
