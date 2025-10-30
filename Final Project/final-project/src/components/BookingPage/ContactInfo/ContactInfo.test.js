import { render, fireEvent, screen } from "@testing-library/react";
import ContactInfo from "./ContactInfo";
import { useNavigate } from "react-router-dom";




test("Test HTML Form Labels", () => {
    render(<ContactInfo setStep={jest.fn()}/>)

    const firstNameLabel = screen.getByLabelText("First Name")

    expect(firstNameLabel).toHaveAttribute("type", "text")
    expect(firstNameLabel).toHaveAttribute("id", "first-name")
    expect(firstNameLabel).toHaveAttribute("placeholder", "First Name")
    expect(firstNameLabel).toHaveAttribute("minLength", "2")
    expect(firstNameLabel).toHaveAttribute("name", "first-name")
    expect(firstNameLabel).toBeRequired();
    expect(firstNameLabel).toHaveAttribute("autocomplete", "given-name")

    const lastNameLabel = screen.getByLabelText("Last Name")

    expect(lastNameLabel).toHaveAttribute("type", "text")
    expect(lastNameLabel).toHaveAttribute("id", "last-name")
    expect(lastNameLabel).toHaveAttribute("placeholder", "Last Name")
    expect(lastNameLabel).toHaveAttribute("minLength", "2")
    expect(lastNameLabel).toHaveAttribute("name", "last-name")
    expect(lastNameLabel).toBeRequired();
    expect(lastNameLabel).toHaveAttribute("autocomplete", "family-name")

    const emailLabel = screen.getByLabelText("Email")

    expect(emailLabel).toHaveAttribute("inputMode", "email")
    expect(emailLabel).toHaveAttribute("type", "text")
    expect(emailLabel).toHaveAttribute("id", "email")
    expect(emailLabel).toHaveAttribute("placeholder", "Email")
    expect(emailLabel).toHaveAttribute("name", "email")
    expect(emailLabel).toBeRequired();
    expect(emailLabel).toHaveAttribute("autocomplete", "email")

    const companyLabel = screen.getByLabelText("Company - Optional")

    expect(companyLabel).toHaveAttribute("type", "text")
    expect(companyLabel).toHaveAttribute("id", "company")
    expect(companyLabel).toHaveAttribute("placeholder", "Company - Optional")
    expect(companyLabel).toHaveAttribute("name", "company")
    expect(companyLabel).toHaveAttribute("autocomplete", "organization")

    const phoneLabel = screen.getByLabelText("Phone")

    expect(phoneLabel).toHaveAttribute("type", "text")
    expect(phoneLabel).toHaveAttribute("id", "phone")
    expect(phoneLabel).toHaveAttribute("placeholder", "Phone")
    expect(phoneLabel).toHaveAttribute("name", "phone")
    expect(phoneLabel).toHaveAttribute("minLength", "10")
    expect(phoneLabel).toBeRequired();
    expect(phoneLabel).toHaveAttribute("autocomplete", "tel")
    expect(phoneLabel).toHaveAttribute("pattern", "[0-9]{10}")

    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    // Fill out valid data
    fireEvent.change(screen.getByLabelText("First Name"), {
        target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
        target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone"), {
        target: { value: "5121234567" },
    });
    

    const submitButton = screen.getByText("CONTINUE");
    fireEvent.click(submitButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");   
})