import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Link,
	Button,
	Heading,
	useColorModeValue,
	useColorMode
} from '@chakra-ui/react';
  
export default function SimpleCard() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
	  	<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
		  		<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
		  		</Stack>
		  		<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id="userName">
							<FormLabel>UserName</FormLabel>
							<Input type="text" />
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input type="password" />
						</FormControl>
			  			<Stack spacing={10}>
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}
							>
								<Link color={'blue.400'}>Forgot password?</Link>
							</Stack>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
							>
				  				Sign in
							</Button>
							<Button onClick={toggleColorMode}>
         						Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
         					</Button>
			  			</Stack>
					</Stack>
		  		</Box>
			</Stack>
	  	</Flex>
	);
}