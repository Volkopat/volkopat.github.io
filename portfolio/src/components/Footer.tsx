import { Box, Text, Link, HStack, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const year = new Date().getFullYear()

  return (
    <Box 
      as="footer" 
      py={8} 
      textAlign="center"
      borderTopWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Text color={textColor}>
        © {year} Your Name. All rights reserved.
      </Text>
      <HStack justify="center" mt={2} spacing={4}>
        <Link 
          href="mailto:your.email@example.com" 
          color={textColor}
          _hover={{ color: 'blue.500' }}
        >
          Email
        </Link>
        <Link 
          href="/resume.pdf" 
          target="_blank" 
          color={textColor}
          _hover={{ color: 'blue.500' }}
        >
          Resume
        </Link>
      </HStack>
    </Box>
  )
}

export default Footer