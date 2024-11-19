import { Box, Container, Heading, VStack, Text, Divider, useColorModeValue } from '@chakra-ui/react'

function Experience() {
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="lg" mb={6}>Work Experience</Heading>
          
          <Box mb={6}>
            <Heading size="md">ML Engineer</Heading>
            <Text color={subtitleColor}>Company Name • 2022 - Present</Text>
            <Text mt={2}>
              • Developed and deployed machine learning models for production use
              <br />
              • Implemented MLOps practices improving model deployment time by 60%
              <br />
              • Led a team of 3 engineers in developing an end-to-end ML pipeline
            </Text>
          </Box>

          <Divider my={6} />

          <Box mb={6}>
            <Heading size="md">Software Engineer</Heading>
            <Text color={subtitleColor}>Previous Company • 2020 - 2022</Text>
            <Text mt={2}>
              • Built scalable microservices using Python and Docker
              <br />
              • Implemented CI/CD pipelines reducing deployment time by 40%
              <br />
              • Collaborated with cross-functional teams to deliver features
            </Text>
          </Box>
        </Box>

        <Box>
          <Heading size="lg" mb={6}>Education</Heading>
          
          <Box mb={6}>
            <Heading size="md">Master's in Computer Science</Heading>
            <Text color={subtitleColor}>University Name • 2018 - 2020</Text>
            <Text mt={2}>
              Specialization in Machine Learning and Artificial Intelligence
              <br />
              Relevant coursework: Deep Learning, Natural Language Processing, Computer Vision
            </Text>
          </Box>

          <Box mb={6}>
            <Heading size="md">Bachelor's in Computer Science</Heading>
            <Text color={subtitleColor}>University Name • 2014 - 2018</Text>
            <Text mt={2}>
              First Class Honours
              <br />
              Relevant coursework: Data Structures, Algorithms, Software Engineering
            </Text>
          </Box>
        </Box>
      </VStack>
    </Container>
  )
}

export default Experience