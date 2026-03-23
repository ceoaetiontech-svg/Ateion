/**
 * ============================================================================
 * ATEION SHARED NAVBAR
 * ============================================================================
 * Primary navbar used across all pages (Homepage, GCO, Contact)
 * ============================================================================
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-paths";
import logo from "../../assets/logo.png";

const navTextClass = "font-bold text-[13px] whitespace-nowrap font-manrope";

function LogoContainer() {
  return (
    <div className="flex items-center relative shrink-0">
      <img
        src={logo}
        alt="Ateion Logo"
        className="h-[50px] md:h-[60px] object-contain w-auto"
      />
    </div>
  );
}

function AboutUsBtn({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (onClick) onClick();
        navigate('/#about');
      }}
      className="bg-[rgba(235,235,235,0.8)] flex h-[36px] items-center justify-center px-[20px] rounded-full shrink-0 cursor-pointer hover:bg-[rgba(215,215,215,0.95)] transition-colors"
    >
      <p className={`${navTextClass} text-[#292929]`}>About Us</p>
    </motion.div>
  );
}

function WorkshopsBtn({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (onClick) onClick();
        navigate('/#workshops');
      }}
      className="bg-[rgba(235,235,235,0.8)] flex gap-[6px] h-[36px] items-center justify-center px-[20px] rounded-full shrink-0 cursor-pointer hover:bg-[rgba(215,215,215,0.95)] transition-colors"
    >
      <p className={`${navTextClass} text-[#292929]`}>Workshops</p>
      <svg className="w-[8px] h-[7px] rotate-180" fill="none" viewBox="0 0 8.06516 7.25">
        <path d={svgPaths.p3367e500} fill="#292929" />
      </svg>
    </motion.div>
  );
}

function GlobalOlympiadBtn({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (onClick) onClick();
        navigate('/gco');
      }}
      className="bg-[rgba(227,227,227,0.72)] flex h-[36px] items-center justify-center px-[20px] rounded-full shrink-0 cursor-pointer hover:bg-[rgba(200,200,200,0.85)] transition-colors"
    >
      <p className={`${navTextClass} text-[#292929]`}>Global Olympiad</p>
    </motion.div>
  );
}

function ResourcesBtn({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (onClick) onClick();
        navigate('/#resources');
      }}
      className="bg-[rgba(227,227,227,0.72)] flex h-[36px] items-center justify-center px-[20px] rounded-full shrink-0 cursor-pointer hover:bg-[rgba(200,200,200,0.85)] transition-colors"
    >
      <p className={`${navTextClass} text-[#292929]`}>Resources</p>
    </motion.div>
  );
}

function NavLinks({ onCloseMobile }: { onCloseMobile?: () => void }) {
  return (
    <div className="flex gap-[16px] items-center shrink-0">
      <AboutUsBtn onClick={onCloseMobile} />
      <WorkshopsBtn onClick={onCloseMobile} />
      <GlobalOlympiadBtn onClick={onCloseMobile} />
      <ResourcesBtn onClick={onCloseMobile} />
    </div>
  );
}

function GetConnectedBtn({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(251, 68, 68, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (onClick) onClick();
        navigate('/contact');
      }}
      className="bg-[#fb4444] flex h-[36px] items-center justify-center px-[20px] rounded-full shrink-0 cursor-pointer hover:bg-[#ff5555] transition-all"
    >
      <p className={`${navTextClass} text-white`}>Get Connected</p>
    </motion.div>
  );
}

function MobileMenuIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-[40px] h-[40px] cursor-pointer z-[150] relative"
      aria-label="Toggle menu"
    >
      <motion.div
        className="w-[24px] h-[2px] bg-[#1a1a1a] rounded-full origin-center"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-[24px] h-[2px] bg-[#1a1a1a] rounded-full my-[4px]"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-[24px] h-[2px] bg-[#1a1a1a] rounded-full origin-center"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
}

export default function SharedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#f7f3eb]/95 backdrop-blur-sm md:bg-transparent">
      <div className="flex items-center justify-between px-[16px] md:px-[24px] py-[12px] md:py-[20px] w-full max-w-[1280px] mx-auto">
        <div className="flex flex-1 items-center justify-start">
          <LogoContainer />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-[2] items-center justify-center">
          <NavLinks />
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-end">
          <GetConnectedBtn />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuIcon 
          isOpen={isMobileMenuOpen} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f7f3eb] border-t border-[rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="flex flex-col gap-[12px] px-[24px] py-[24px]">
              <AboutUsBtn onClick={() => handleNavClick('/#about')} />
              <WorkshopsBtn onClick={() => handleNavClick('/#workshops')} />
              <GlobalOlympiadBtn onClick={() => handleNavClick('/gco')} />
              <ResourcesBtn onClick={() => handleNavClick('/#resources')} />
              <GetConnectedBtn onClick={() => handleNavClick('/contact')} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
