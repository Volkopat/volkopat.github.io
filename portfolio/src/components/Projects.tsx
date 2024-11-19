import { 
  Box, 
  Container, 
  SimpleGrid, 
  Heading, 
  Text, 
  Image, 
  Link, 
  Tag, 
  HStack, 
  VStack, 
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Array<{
    name: string;
    colorScheme: string;
  }>;
  githubUrl: string;
  demoUrl?: string;
  huggingfaceUrl?: string;
  category: 'ml' | 'software' | 'devops';
}

function Projects() {
  const projects: Project[] = [
    {
      title: "LLM Fine-tuning Pipeline",
      description: "End-to-end pipeline for fine-tuning large language models on custom datasets. Includes data preprocessing, training, and evaluation workflows.",
      image: "/llm-project.jpg",
      technologies: [
        { name: "PyTorch", colorScheme: "orange" },
        { name: "Transformers", colorScheme: "yellow" },
        { name: "PEFT", colorScheme: "green" },
        { name: "MLflow", colorScheme: "blue" }
      ],
      githubUrl: "https://github.com/yourusername/llm-finetuning",
      huggingfaceUrl: "https://huggingface.co/yourusername/custom-llm",
      category: 'ml'
    },
    {
      title: "Computer Vision Pipeline",
      description: "Real-time object detection and tracking system using YOLO and DeepSORT. Optimized for edge devices with TensorRT.",
      image: "/cv-project.jpg",
      technologies: [
        { name: "Python", colorScheme: "blue" },
        { name: "PyTorch", colorScheme: "orange" },
        { name: "TensorRT", colorScheme: "green" },
        { name: "OpenCV", colorScheme: "red" }
      ],
      githubUrl: "https://github.com/yourusername/cv-pipeline",
      demoUrl: "https://yourdemo.com/cv-demo",
      category: 'ml'
    },
    {
      title: "MLOps Platform",
      description: "Automated ML model deployment platform with A/B testing, monitoring, and automatic retraining capabilities.",
      image: "/mlops-project.jpg",
      technologies: [
        { name: "Kubernetes", colorScheme: "blue" },
        { name: "Docker", colorScheme: "cyan" },
        { name: "FastAPI", colorScheme: "teal" },
        { name: "Prometheus", colorScheme: "orange" }
      ],
      githubUrl: "https://github.com/yourusername/mlops-platform",
      category: 'devops'
    },
    {
      title: "NLP Research Framework",
      description: "Framework for rapid prototyping of NLP experiments, including data processing, model training, and evaluation pipelines.",
      image: "/nlp-project.jpg",
      technologies: [
        { name: "Python", colorScheme: "blue" },
        { name: "Transformers", colorScheme: "yellow" },
        { name: "Ray", colorScheme: "purple" },
        { name: "Weights & Biases", colorScheme: "pink" }
      ],
      githubUrl: "https://github.com/yourusername/nlp-framework",
      huggingfaceUrl: "https://huggingface.co/yourusername/nlp-models",
      category: 'ml'
    }
  ];

  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} align="stretch">
        <Heading mb={4}>Featured Projects</Heading>
        
        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          {projects.map((project, index) => (
            <Box 
              key={index}
              bg={cardBg}
              borderRadius="xl"
              overflow="hidden"
              borderWidth="1px"
              borderColor={borderColor}
              transition="all 0.2s"
              _hover={{ 
                transform: 'translateY(-4px)',
                boxShadow: 'xl'
              }}
            >
              <Image 
                src={project.image} 
                alt={project.title}
                height="200px"
                width="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/400x200"
              />
              
              <VStack p={6} align="start" spacing={4}>
                <Heading size="md">{project.title}</Heading>
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                  {project.description}
                </Text>
                
                <HStack wrap="wrap" spacing={2}>
                  {project.technologies.map(tech => (
                    <Tag 
                      key={tech.name} 
                      size="sm" 
                      colorScheme={tech.colorScheme}
                      borderRadius="full"
                    >
                      {tech.name}
                    </Tag>
                  ))}
                </HStack>

                <HStack spacing={4}>
                  <Link 
                    href={project.githubUrl} 
                    isExternal
                    display="flex"
                    alignItems="center"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    _hover={{ color: 'blue.500' }}
                  >
                    <Icon as={FaGithub} mr={2} />
                    GitHub
                  </Link>
                  
                  {project.demoUrl && (
                    <Link 
                      href={project.demoUrl} 
                      isExternal
                      display="flex"
                      alignItems="center"
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _hover={{ color: 'green.500' }}
                    >
                      <Icon as={FaExternalLinkAlt} mr={2} />
                      Demo
                    </Link>
                  )}
                  
                  {project.huggingfaceUrl && (
                    <Link 
                      href={project.huggingfaceUrl} 
                      isExternal
                      display="flex"
                      alignItems="center"
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _hover={{ color: 'orange.500' }}
                    >
                      <Icon as={SiHuggingface} mr={2} />
                      Model
                    </Link>
                  )}
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects