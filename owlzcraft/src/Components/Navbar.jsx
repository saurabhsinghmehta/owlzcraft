import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Link, Image, Box, Button } from "@chakra-ui/react";
import owlCraftlogo from "../Utils/Navbar/Images/owlCraft.png";

function Navbar({ data }) {
  return (
    <>
      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        boxShadow=" rgba(0, 0, 0, 0.18) 0px 2px 4px"
      >
        <div>
          <Box id="owlzlogo">
            <Image src={owlCraftlogo} alt="OwlzCraftLogo" />
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
            padding: "56px",
            _hover: { color: "orange" },
          }}
        >
          {data.map((e) => (
            <Link
              className="link"
              color="#9a6a38"
              fontSize="20px"
              fontWeight="400"
            >
              {e}
            </Link>
          ))}
        </div>
        <div>
          <Button
            colorScheme="whatsapp"
            borderRadius="22px"
            size="20px"
            _hover={{
              bg: "orange",
              transitionDuration: "570ms",
            }}
            fontSize="18px"
            p="15px"
            width="200px"
            _active={{}}
          >
            let's Connect <ArrowForwardIcon />{" "}
          </Button>
        </div>
      </Flex>
    </>
  );
}

export { Navbar };
