tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#da373d",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1514944152559-a103040c7f16?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        footer:
          "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1414759030024-7889df4b20f4?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      screens: {
        "max-441px": "441px",
      },
    },
  },
};
