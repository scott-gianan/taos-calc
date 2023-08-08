import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";

function SavedDataDrawer({ isDrawerOpen, finalFocusRef, onDrawerClose }) {
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        finalFocusRef={finalFocusRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onDrawerClose} />
          <DrawerHeader>Saved Projects</DrawerHeader>

          <DrawerBody>dae pa ini tapos</DrawerBody>
          <DrawerFooter>
            <Button
              colorScheme="red"
              variant={"solid"}
              mr={3}
              onClick={onDrawerClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SavedDataDrawer;
