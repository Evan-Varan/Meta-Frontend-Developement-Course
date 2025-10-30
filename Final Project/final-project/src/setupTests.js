import "@testing-library/jest-dom";
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
