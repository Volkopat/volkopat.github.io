import { Box, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <Box 
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      bg={bg}
      boxShadow="sm"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
        />

        <Flex gap={4}>
          <IconButton
            as="a"
            href="https://github.com/yourusername"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://twitter.com/yourusername"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
          />
          <IconButton
            as="a"
            href="https://huggingface.co/yourusername"
            target="_blank"
            aria-label="Hugging Face"
            icon={<SiHuggingface />}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar