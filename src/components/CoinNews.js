import { Box, Text, Heading, Image } from '@chakra-ui/react';

const CoinNews = ({ news }) => {
  return (
    <>
      {news &&
        news.map(news => {
          return (
            <Box
              key={news.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Heading m="5" mb="0" as="h4" size="md">
                <strong>{news.title}</strong>
              </Heading>
              <Box d="flex" p="6">
                <Box w={1 / 3}>
                  <Image src={news.img} alt="uni news" />
                </Box>
                <Box w={2 / 3}>
                  <Text m="5" mt="0">
                    {news.text}
                  </Text>
                </Box>
              </Box>
              <Box m="5" as="a" href={news.url}>
                Leer más...
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default CoinNews;
