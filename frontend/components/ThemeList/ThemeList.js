import { Center, Box, Wrap, WrapItem, Image, Text } from '@chakra-ui/react'

const Theme = ({ data, isCurrent, onClickTheme }) => {
  let handleClick = () => {
    onClickTheme(data.slug)
  }
  return (
    <>
      <Center
        flexDirection='column'
        onClick={handleClick}
        display='inline-block'
        textAlign='center'
      >
        <Box
          maxW='150px'
          p='1'
          border='2px'
          borderColor={isCurrent ? 'customgray' : 'transparent'}
          borderRadius='5px'
          overflow='hidden'
        >
          <Image
            width='100%'
            fallbackSrc='https://via.placeholder.com/240x340'
            padding='0'
            border='1px'
            borderColor='#E2E8F0'
            borderRadius='5px'
            src='/thumbnail.jpg'
          />
        </Box>
        <Text>{data.name}</Text>
      </Center>
    </>
  )
}

const ThemeList = ({ themes, currentTheme, onChange }) => {
  let themeClicked = (slug) => {
    onChange(slug)
  }
  return (
    <>
      <Wrap spacing='20px' align='center' justify='center'>
        {themes.length
          ? themes?.map((theme) => {
              let curr = false
              if (theme.slug === currentTheme.slug) curr = true
              return (
                <WrapItem key={theme.slug}>
                  <Theme
                    data={theme}
                    isCurrent={curr}
                    onClickTheme={themeClicked}
                  />
                </WrapItem>
              )
            })
          : ''}
      </Wrap>
    </>
  )
}

export default ThemeList
