import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import MLApps from './components/MLApps'
import Footer from './components/Footer'

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1" p={8} pt={20}>
        <Tabs variant="soft-rounded" colorScheme="blue" isLazy>
          <TabList justifyContent="center" mb={8}>
            <Tab>Home</Tab>
            <Tab>Experience</Tab>
            <Tab>Projects</Tab>
            <Tab>ML Apps</Tab>
          </TabList>
          
          <TabPanels>
            <TabPanel>
              <Home />
            </TabPanel>
            <TabPanel>
              <Experience />
            </TabPanel>
            <TabPanel>
              <Projects />
            </TabPanel>
            <TabPanel>
              <MLApps />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </Box>
  )
}

export default App