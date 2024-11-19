import { Box, Container, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'

interface GradioApp {
  title: string;
  description: string;
  url: string;
}

function MLApps() {
  const apps: GradioApp[] = [
    {
      title: "Text Classification",
      description: "A deep learning model for classifying text into categories.",
      url: "https://huggingface.co/spaces/yourusername/text-classification"
    },
    {
      title: "Image Generation",
      description: "Generate images using stable diffusion models.",
      url: "https://huggingface.co/spaces/yourusername/image-generation"
    }
  ]

  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Container maxW="container.lg">
      <Heading mb={8}>Interactive ML Applications</Heading>
      <SimpleGrid columns={[1]} spacing={8}>
        {apps.map((app, index) => (
          <Box 
            key={index} 
            p={6} 
            bg={cardBg}
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading size="md" mb={4}>{app.title}</Heading>
            <Text mb={4}>{app.description}</Text>
            <Box 
              as="iframe"
              src={app.url}
              width="100%"
              height="500px"
              borderRadius="md"
              border="none"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default MLApps