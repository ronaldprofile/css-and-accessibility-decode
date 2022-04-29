import { styled } from "../../../stitches.config";

const Button = styled("button", {
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  transition: "0.2s",
  cursor: "pointer",

  variants: {
    color: {
      green: {
        background: "#22c55e",
        color: "#fff",
        border: "2px solid transparent",

        "&:hover": {
          borderColor: "#22c55e",
          background: "transparent"
        }
      },

      blue: {
        background: "#2563eb",
        color: "#fff",
        border: "2px solid transparent",

        "&:hover": {
          borderColor: "#2563eb",
          background: "transparent"
        }
      }
    },

    shape: {
      rounded_full: {
        borderRadius: 9999
      },

      rounded_sm: {
        borderRadius: 8
      }
    }
  },

  defaultVariants: {
    color: "green",
    shape: "rounded_sm"
  }
});

const Box = styled("div", {
  padding: "24px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "12px",

  textAlign: "center",
  background: "#202024",
  borderRadius: "6px",

  span: {
    fontWeight: "bold",
    fontSize: "20px"
  }
});

export function ButtonWithStitches() {
  return (
    <Box>
      <span>With Stitches</span>
      <Button color="blue">Hello World</Button>
    </Box>
  );
}
